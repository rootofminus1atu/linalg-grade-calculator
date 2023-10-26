import React, { useState } from 'react';
import { initial, merge } from 'lodash'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import contents from './contents';

import Contents from './components/Contents';
import Grades from './components/Grades';
import Legend from './components/Legend';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Todos from './components/Todos';


function App() {
  console.log("In app")

  const initialState = contents.map((content) => ({
    ...content,
    chapters: content.chapters.map((chapter) => ({
      ...chapter,
      disabled: false,
      checkbox1: false,
      ...(chapter.core && { checkbox2: false }),
    })),
  }));

  console.log("created initial")

  const localState = JSON.parse(localStorage.getItem("state"));

  console.log("got state")

  console.log(initialState)
  console.log(localState)

  const merged = initialState.map((content) => ({
    ...content,
    chapters: content.chapters.map((chapter) => {

      console.log(chapter)

      const foundContent = localState
        .find((con) => con.title === content.title)

      console.log(foundContent)

      if (!foundContent) {
        return { ...chapter }
      }

      const found = foundContent
        .chapters
        .find((cha) => cha.id === chapter.id)

      console.log(found)

      if (found) {
        return {
          ...chapter,
          disabled: found.disabled,
          checkbox1: found.checkbox1,
          checkbox2: found.checkbox2,
          description: chapter.description,
        }
      } else {
        return {
          ...chapter
        }
      }
    })
  }))
  
  console.log("merged")

  const [state, setState] = useState(merged);
  
  console.log("use state init successful")




  const setStateWithStorage = (newState) => {
    setState(newState)
    localStorage.setItem('state', JSON.stringify(newState));
  }

  const updateDisabled = (onOff, chapterId) => {

    const updatedState = state.map((content) => ({
      ...content,
      chapters: content.chapters.map((chapter) => {
        if (chapter.id === chapterId) {
          chapter.disabled = onOff
        }

        return chapter
      }),
    }))

    setStateWithStorage(updatedState)
  }

  const updateCheckbox = (onOff, chapterId, whichCheckbox) => {

    const updatedState = state.map((content) => ({
      ...content,
      chapters: content.chapters.map((chapter) => {
        if (chapter.id === chapterId) {
          if (whichCheckbox === 1) {
            return {
              ...chapter,
              checkbox1: onOff,
            };
          } else if (whichCheckbox === 2) {
            return {
              ...chapter,
              checkbox2: onOff,
            }
          } 
        }
        return chapter
      }),
    }));

    setStateWithStorage(updatedState);
  } 

  const updateCheckbox1 = (onOff, chapterId) => {
    updateCheckbox(onOff, chapterId, 1)
  }

  const updateCheckbox2 = (onOff, chapterId) => {
    updateCheckbox(onOff, chapterId, 2)
  }

  const checkboxCountReducer = (func) => {
    return state.reduce((total, content) => (
      total + 
      content.chapters.reduce((chapterTotal, chapter) => {
        if (chapter.disabled) return chapterTotal + 0

        return chapterTotal + func(chapter)
      }, 0)
    ), 0)
  }

  const allTotal = checkboxCountReducer((chapter) => (chapter.core ? 2 : 1))
  const allMastered = checkboxCountReducer((chapter) => (chapter.checkbox1 ? 1 : 0) + (chapter.checkbox2 ? 1 : 0))
  const allEmpty = allTotal - allMastered

  const all = {
    total: allTotal,
    mastered: allMastered,
    empty: allEmpty
  }

  const standardTotal = checkboxCountReducer((chapter) => (chapter.core ? 0 : 1))
  const standardMastered = checkboxCountReducer((chapter) => ((!chapter.core && chapter.checkbox1) ? 1 : 0 ))
  const standardEmpty = standardTotal - standardMastered

  const standard = {
    total: standardTotal,
    mastered: standardMastered,
    empty: standardEmpty
  }

  const coreTotal = checkboxCountReducer((chapter) => (chapter.core ? 1 : 0))
  const coreMastered = checkboxCountReducer((chapter) => ((chapter.core && chapter.checkbox1 && chapter.checkbox2) ? 1 : 0))
  const coreNOTMastered = coreTotal - coreMastered
  const coreEmpty = checkboxCountReducer((chapter) => ((chapter.core && !chapter.checkbox1 && !chapter.checkbox2) ? 1 : 0))
  const coreNONEmpty = coreTotal - coreEmpty

  const core = {
    total: coreTotal,
    mastered: coreMastered,
    notMastered: coreNOTMastered,
    empty: coreEmpty,
    nonEmpty: coreNONEmpty
  }

  const amount = {
    all,
    standard,
    core
  }

  return (
    <Container maxWidth="xl">
      <Header style={{ marginBottom: '20px' }} />
        <main>
          <Grid container spacing={2} justifyContent="center" className="content-group"> 
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Contents 
                state={state}
                updateCheckbox1={updateCheckbox1}
                updateCheckbox2={updateCheckbox2} 
                updateDisabled={updateDisabled}
              />
            </Grid>
            <Grid item sm={0} md={1} lg={2}></Grid>
            <Grid item xs={12} sm={12} md={5} lg={4}>
              <Grades amount={amount} />
              <Legend />
            </Grid>
          </Grid>
          <Cards className="content-group" />
          <Todos />
        </main>
      <Footer />
    </Container>
  )
}

export default App

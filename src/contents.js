const contents = [
    {
        title: 'Linear Systems and Matrices',
        chapters: [
            {
                id: 'L.1',
                description: 'I can solve systems using row operations and Gaussian elimination. I can characterize the solution set of a system.',
                core: true,
            },
            {
                id: 'L.2',
                description: 'I can identify pivots. I understand the difference between echelon and reduced echelon form and can use row operations to achieve those forms.',
                core: false,
            },
        ]
    },
    {
        title: 'Matrix Algebra',
        chapters: [
            {
                id: 'M.1',
                description: 'I understand and can perform basic matrix arithmetic and operations. I understand the funciton of an identity matrix.',
                core: true,
            },
            {
                id: 'M.2',
                description: 'I understand the definition of matrix inverse and can compute the inverse of a matrix (provided it exists) using Gaussian elimination.',
                core: true,
            },
            {
                id: 'M.3',
                description: 'I understand the properties of matrix inverses and the properties of the transpose.',
                core: false,
            },
            {
                id: 'M.4',
                description: 'I understand elementary matrices and can find the inverse of a matrix using roow operations.',
                core: false,
            },
            {
                id: 'M.5',
                description: 'I can solve a linear system using an inverse matrix.',
                core: false,
            },
            {
                id: 'M.6',
                description: 'understand the Equivalence Theorem and can determine whether a matrix is invertible.',
                core: true,
            },
            {
                id: 'M.7',
                description: 'I can demonstrate the properties of diagonal, triangular and symmetric matrices.',
                core: false,
            },
            {
                id: 'M.8',
                description: 'I can demonstrate the basic properties of linear transformation algebraically and geometrically.',
                core: false,
            },
            {
                id: 'M.9',
                description: 'I can find a Standard Matrix for a transformation or composition of transformations. I can determine if a transformation is invertible.',
                core: false,
            },
        ]
    },
    {
        title: 'Determinants',
        chapters: [
            {
                id: 'D.1',
                description: 'I can compute the determinant of a matrix by various methods. I can demonstrate the properties of determinants.',
                core: true,
            },
            {
                id: 'D.2',
                description: 'I can reresent row operations with matrix multiplication and understand the connection with the determinant.',
                core: false,
            },
            {
                id: 'D.3',
                description: 'I can demonstrate connections between determinants of matrices and the other properties of those matrices using the Equivalence Theorem.',
                core: true,
            },
        ]
    },
    {
        title: 'Euclidean Vector Spaces',
        chapters: [
            {
                id: 'EV.1',
                description: 'I can perform operations with vectors and demonstrate the geometry of these operaitons.',
                core: true,
            },
            {
                id: 'EV.2',
                description: 'I can determine whether a vector is a linear combination of a set of given vectors.',
                core: false,
            },
            {
                id: 'EV.3',
                description: 'I can determine if two vectors are orthogonal. I can compute projection vectors.',
                core: false,
            },
        ]
    },
    {
        title: 'General Vector Spaces',
        chapters: [
            {
                id: 'GV.1',
                description: 'I can state the definition of a vector space. I can determine whether a set of vectors forms a vector space. I can state the properties of a vector space.',
                core: true,
            },
            {
                id: 'GV.2',
                description: 'I can state the properties of a subspace of vector space and determine if a subset of vectors forms a subspace.',
                core: false,
            },
            {
                id: 'GV.3',
                description: 'I can determine whether a set of vectors forms a sanning set or a basis for a vector space. I can find the dimension of a vector space or a subspace of a vector space.',
                core: false,
            },
            {
                id: 'GV.4',
                description: 'I can show whether a set of vectors is linearly independent or linearly dependent an/or demonstrate the geometry of linear independence.',
                core: true,
            },
            {
                id: 'GV.5',
                description: 'I can determine the coordinates of a vector with respect to a given basis.',
                core: false,
            },
            {
                id: 'GV.6',
                description: 'I can construct and use invertible matrices that achieve changes of coordinates.',
                core: false,
            },
            {
                id: 'GV.7',
                description: 'I can compute the row space, column space, and null space of a matrix.',
                core: false,
            },
            {
                id: 'GV.8',
                description: 'I can compute the basis of a subspace.',
                core: false,
            },
            {
                id: 'GV.9',
                description: 'I can compute the rank and nullity of a matrix.',
                core: false,
            },
            {
                id: 'GV.10',
                description: 'I understand the connection of vector spaces and their properties to other matrix properties given by the (updated) Equivalence Theorem.',
                core: false,
            },
        ]
    },
    {
        title: 'Eigenvectors and Eigenvalues',
        chapters: [
            {
                id: 'E.1',
                description: 'I can state the definition of eigenvalue/eigenvector and demonstrate its meaning.',
                core: false,
            },
            {
                id: 'E.2',
                description: 'I can compute the characteristic polynomial of a square matrix. I can determine the eigenvalues of a square matrix and its corresponding eigenvectors.',
                core: false,
            },
            {
                id: 'E.3',
                description: 'I can determine the algebraic and geometric multiplicity of an eigenvalue.',
                core: false,
            },
            {
                id: 'E.4',
                description: 'I can find an eigenspace and its basis, determine whether a matrix is diagonalizable, and compute the diagonalization when it is possible.',
                core: false,
            },
            {
                id: 'E.5',
                description: 'I can use the diagonalization of a matrix for computation.',
                core: false,
            },
            {
                id: 'E.6',
                description: 'I can demonstrate the connections between eigenvalues/eigenspaces and other properties of square matrices with the (updated) Equivalence Theorem.',
                core: false,
            },
        ]
    },
]

export default contents
import img1 from '../../images/projectImages/website.png';
import img2 from '../../images/projectImages/bclr.png';
import img3 from '../../images/projectImages/ppdbs.png';
import img4 from '../../images/projectImages/notes.png';


export const projectData = [
    {
        id:'p1',
        name: 'My Portfolio',
        imgsrc: img1,
        subhead: 'Personal Website',
        desc: 'This is my personal website about, well, me. Created from the bottom up using React, this is a single page website. It is responsive across various device sizes. Gives insight about me, my skills, projects and a way to contact me, directly from the website. Works on all major browsers.',
        link: 'http://nnadvith.herokuapp.com/',
        tech: ['React', 'Styled Components', 'ThreeJS', 'EmailJS'],

    },
    {
        id:'p2',
        name: 'Breast Cancer Classification',
        imgsrc: img2,
        subhead: 'Logistic Regression model.',
        desc: 'A very simple Logistic Regression model to classify Breast Cancer into 2 classes (Benign and Malignant). Uses the Breast Cancer Wisconsin Dataset from UCI Machine Learning Repository. Takes 9 parameters as input.',
        link: 'https://breast-cancer-lr.herokuapp.com/',
        tech: ['Python', 'Scikit-Learn', 'Streamlit'],

    },
    {
        id:'p3',
        name: 'Placement Portal Web App',
        imgsrc: img3,
        subhead: 'Database Application.',
        desc: 'A Placement Portal Web application where students can view and apply for jobs and interviews. Companies can create jobs and hire applicants through the portal. Uses sessions and user authentication. MySQL database is used. ',
        link: 'https://github.com/nn-advith/dbsProject',
        tech: ['Express', 'EJS', 'MySQL', 'PassportJS', 'Javascript'],

    },
    {
        id:'p4',
        name: 'Google Keep Clone',
        imgsrc: img4,
        subhead: 'MERN stack application',
        desc: 'A simple Google Keep clone MERN stack application built using React and Atlas. CRUD functionality is implemented.',
        link: 'https://keep-react-4585.netlify.app/',
        tech: ['MongoDB Atlas', 'Express', 'React', 'NodeJS'],

    },
]
import img1 from '../../images/projectImages/website.png';
import img2 from '../../images/projectImages/bclr.png';
import img3 from '../../images/projectImages/ppdbs.png';
import img4 from '../../images/projectImages/notes.png';
import img5 from '../../images/projectImages/attendance.png';
import img6 from '../../images/projectImages/detonote.png';

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
        name: 'DetoNote',
        imgsrc: img6,
        subhead: 'MERN Stack project',
        desc: 'A MERN stack application where you can send notes which get deleted automatically after being read. This mini personal project was inspired  from PrivNote.',
        link: 'https://detonote.netlify.app/',
        tech: ['MERN', 'React-Router'],

    },
    {
        id:'p3',
        name: 'Breast Cancer Classification',
        imgsrc: img2,
        subhead: 'Logistic Regression model.',
        desc: 'A very simple Logistic Regression model to classify Breast Cancer into 2 classes (Benign and Malignant). Uses the Breast Cancer Wisconsin Dataset from UCI Machine Learning Repository. Takes 9 parameters as input.',
        link: 'https://breast-cancer-lr.herokuapp.com/',
        tech: ['Python', 'Scikit-Learn', 'Streamlit'],

    },
    {
        id:'p4',
        name: 'Placement Portal Web App',
        imgsrc: img3,
        subhead: 'Database Application.',
        desc: 'A Placement Portal Web application where students can view and apply for jobs and interviews. Companies can create jobs and hire applicants through the portal. Uses sessions and user authentication. MySQL database is used. (Currently not hosted) ',
        link: 'https://github.com/nn-advith/dbsProject',
        tech: ['Express', 'EJS', 'MySQL', 'PassportJS', 'Javascript'],

    },
    {
        id:'p5',
        name: 'Google Keep Clone',
        imgsrc: img4,
        subhead: 'MERN stack application',
        desc: 'A simple Google Keep clone MERN stack application built using React and Atlas. CRUD functionality is implemented.',
        link: 'https://keep-react-4585.netlify.app/',
        tech: ['MongoDB Atlas', 'Express', 'React', 'NodeJS'],

    },
    {
        id:'p6',
        name: 'Automatic Attendance System',
        imgsrc: img5,
        subhead: 'Face Recognition Project',
        desc: 'A simple python application which records the attendance of students into a CSV file from an image of the classroom. Faces are converted into an array of encodings of length 128 which are later used for identification in a new image. PyQt5 is used to create a GUI and load images. ',
        link: 'https://github.com/nn-advith/Attendance-Sytem-Using-Face-Recognition',
        tech: ['Python', 'face_recognition', 'OpenCV', 'PyQt5'],

    },
    
]
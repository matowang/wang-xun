import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Layout = ({ children, noHeaderSpace }) => (
    <ThemeProvider theme={theme}>
        <Head>
            <title>王尋 Wang Xun</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content={`王尋，本名王建雄，美籍華裔，1962年生於台灣，年幼時於鶯歌一帶學習傳統雕刻技藝，1989年畢業於國立台灣藝術大學雕塑系，同年獲得第16屆台北市立美術館美展雕塑類第一名後便出國深造，先於紐約視覺藝術學院進修一年，兩年後又取得紐約理工學院電腦動畫碩士學位。1996年至2007年於美國知名視覺特效公司 Rhythm and Hues Studio 從事雕塑及電腦模型工作達近十二年，曾參與製作的好萊塢電影包含《黃金羅盤》、《加菲貓1&2》、《納尼亞傳奇》、《夜魔俠》、《X戰警2》、《哈利波特：神秘的魔法石》等。2001年以卓越雕塑及 3D 動畫特殊才能榮獲美國永久居留權。作品曾獲台北市立美術館及國立台灣美術館典藏。

            2007年返台後，他陸續公開發表1999年便率先開創之「時差雕塑」（Space in Time Sculpture）。他以早期在台藝大雕塑系就學時所養成的人體造型雕塑基本功為底，結合後期在美國知名視覺特效公司任職期間所練就的3D動畫技術，經過不斷探索，精鍊出此套整合了傳統雕塑技藝與現代數位技術的跨世代獨特全新創作手法，以觀賞視角多元豐富的360度全向式人像為媒介，置入時間元素來呈現過去、現在、未來不同時空的連續性，不僅打破傳統雕塑受限於單一時空的面向，也提供一種超越視覺的新體驗，為雕塑開啟了新的可能。

            2019年，他於大葉大學視覺傳達設計系任教期間，又開創了全新的「視差雕塑」（Parallax Sculpture）。在視覺層次上，利用各個不同透視鏡位的差異，讓不同視角產生極大視覺落差，創造出人能理解的豐富視覺感官效果，讓作品即使在焦距上差異變形，一樣能清楚展現人體基本結構。同時以扭曲、擠壓等手法將形體變形，塑造出簡約流暢的線條，讓觀者感受到視覺上的立體感，且更能聚焦於人體刻畫的主題。

            Wang Xun was born in 1962 in Taiwan. A Chinese Americans. He used to learn traditional sculptural methods around Yingge area at his early age. After graduating from the Department of Sculpture at the National Taiwan University of Arts and winning first prize at the 16th Taipei Fine Arts Exhibition under sculpture category in 1989, he went abroad for higher studies. He stayed at School of Visual Arts in New York City for one-year study firstly, then he got a master degree in Computer Animation from New York Institute of Technology two years later. From 1996 to 2007, he was engaged in sculpture and computer modeling works for famous visual effects company “Rhythm and Hues Studio” in the United States for almost 12 years and had ever participated in the production of Hollywood movies, including “Golden Compass,” “Garfield 1&2,” “The Chronicles of Narnia,” “Daredevil,” “X-Men 2” and “Harry Potter and the Philosopher's Stone,” etc. In 2001, he obtained the United States Lawful Permanent Residency for his extraordinary ability in sculpture and 3D animation. His sculpture works are collected by Taipei Fine Arts Museum and National Taiwan Museum of Fine Arts.

            After returning to Taiwan in 2007, he began to made a debut for “Space in Time Sculpture” which was firstly created by him in 1999. On the basis of the human body modeling and fundamental sculptural skills which he developed while studying in the Department of Sculpture at the National Taiwan University of Arts, he also integrated 3D animation skills acquired while working for a famous visual effects company in the United States for his creation. After continuous explorations, he refined a set of brand-new and unique cross-generational creative techniques integrating traditional sculptural methods with modern digital technology. The resulting “Space in Time Sculpture” applies the medium of 360-degree omnidirectional portrait that offers diverse viewing angles, inserting the element of time to present the space and time continuity of the past, present, and future. The presentation not only breaks free of the single space and time limitation of traditional sculpture, but also offers a new experience beyond the sense of sight, opening new sculptural possibilities. Looking still while also seemingly dancing around, the work allows viewers to feel the space-time energetic fluidity of the art in between movement and stillness, to appreciate and treasure every precious and fleeting moment in life!

            In 2019, he established a brand-new “Parallax Sculpture” during his teaching period at the Department of Visual Communication Design of Da-Yeh University. At the visual level, he utilizes the differences from various perspective glasses to generate stunning visual gap effects and create rich visual sensory effects that people can understand. Even when the focal lengths create deformation, the basic structure of the human body is still clearly displayed. The body can be deformed by methods such as twisting or squeezing to create simple and smooth lines, letting viewers feel the three-dimensional visual sense and focus on the theme portrayed by the human body.`} />
        </Head>
        <header>
            <Navbar />
        </header>
        {!noHeaderSpace &&
            <div className="header-space" />
        }
        {children}
        <Footer />
    </ThemeProvider>
)

export default Layout;

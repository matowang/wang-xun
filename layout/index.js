import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children, noHeaderSpace }) => (
    <>
        <Head>
            <title>王尋 Wang Xun</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content={`王尋，1962年出生於台灣台東，1989 年畢業於國立台灣藝術大學雕塑系，同年獲得第16屆台北市立美術館美展雕塑類第一名後便出國深造，先於紐約視覺藝術學院進修一年，兩年後又取得紐約理工學院電腦動畫碩士學位。爾後在美國知名視覺特效公司「節奏特效工作室」從事雕塑及電腦模型工作達近十三年，曾參與製作的好萊塢電影包含《黃金羅盤》、《加菲貓1&2》、《納尼亞傳奇》、《夜魔俠》、《X戰警2》、《哈利波特：神秘的魔法》等。2001年以卓越雕塑及 3D 動畫特殊才能榮獲美國永久居留權。雕塑作品曾獲台北市立美術館及國立台灣美術館典藏。
            
            2007年返台後開始陸續創作，以早期在台藝大雕塑系就學時所養成的人體造型雕塑基本功為底，結合後期在美國知名視覺特效公司任職期間所練就的3D動畫技術，經過不斷探索，精鍊出一套整合了傳統雕塑技藝與現代數位技術的跨世代獨特全新創作手法──「時差雕塑」（Space in Time Sculpture），以觀賞視角多元豐富的360度全向式人像為媒介，置入時間元素來呈現過去、現在、未來不同時空的連續性，不僅打破傳統雕塑受限於單一時空的面向，也提供一種超越視覺的新體驗，為雕塑開啟了新的可能。作品看似靜止卻又像舞動跳躍著，也讓觀者感受到動靜之間，時空能量在作品裡流動，藉此體會當下的美好並珍惜寶貴有限的生命！
            
            Wang Xun was born in 1962 in Taitung, Taiwan. After graduating from the Department of Sculpture at the National Taiwan University of Arts and winning first prize at the 16th Taipei Fine Arts Exhibition under sculpture category in 1989, he went abroad for higher studies. He stayed at School of Visual Arts in New York City for one-year study firstly, then he got a master degree in Computer Animation from New York Institute of Technology two years later. After that, he was engaged in sculpture and computer modeling works for famous visual effects company “Rhythm and Hues Studio” in the United States for almost 13 years and had ever participated in the production of Hollywood movies, including “Golden Compass,” “Garfield 1&2,” “The Chronicles of Narnia,” “Daredevil,” “X-Men 2” and “Harry Potter and the Philosopher's Stone,” etc. In 2001, he obtained the United States Lawful Permanent Residency for his extraordinary ability in sculpture and 3D animation. His sculpture works are collected by Taipei Fine Arts Museum and National Taiwan Museum of Fine Arts.
            
            After returning to Taiwan in 2007, he began to play with human body modeling and basic sculptural skills, which he developed while studying in the Department of Sculpture at the National Taiwan University of Arts. In the process, he also integrated 3D animation skills acquired while working for a famous visual effects company in the United States. After continuous explorations, he refined a set of brand-new and unique cross-generational creative techniques integrating traditional sculptural methods with modern digital technology. The resulting “Space in Time Sculpture” applies the medium of 360-degree omnidirectional portrait that offers diverse viewing angles, inserting the element of time to present the space and time continuity of the past, present, and future. The presentation not only breaks free of the single space and time limitation of traditional sculpture, but also offers a new experience beyond the sense of sight, opening new sculptural possibilities. Looking still while also seemingly dancing around, the work allows viewers to feel the space-time energetic fluidity of the art in between movement and stillness, to appreciate and treasure every precious and fleeting moment in life!`} />
        </Head>
        <header>
            <Navbar />
        </header>
        {!noHeaderSpace &&
            <div className="header-space" />
        }
        {children}
        <Footer />
    </>
)

export default Layout;

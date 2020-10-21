import Head from 'next/head'
import Layout from '../layout'

export default function Home() {
  return (
    <Layout noHeaderSpace>
      <main id='home'>
        <Head>
          <title>王尋 Wang Xun</title>
        </Head>
        <section className="hero">
          <h1>王尋<br />Wang Xun</h1>
        </section>
        <div className="content">
          <section className="description">
            <p>王尋，1962年出生於台灣台東，1989 年畢業於國立台灣藝術大學雕塑系，同年獲得第16屆台北市立美術館美展雕塑類第一名後便出國深造，先於紐約視覺藝術學院進修一年，兩年後又取得紐約理工學院電腦動畫碩士學位。爾後在美國知名視覺特效公司「節奏特效工作室」從事雕塑及電腦模型工作達近十三年，曾參與製作的好萊塢電影包含《黃金羅盤》、《加菲貓1&2》、《納尼亞傳奇》、《夜魔俠》、《X戰警2》、《哈利波特：神秘的魔法》等。2001年以卓越雕塑及 3D 動畫特殊才能榮獲美國永久居留權。雕塑作品曾獲台北市立美術館及國立台灣美術館典藏。</p>
            <p>2007年返台後開始陸續創作，以早期在台藝大雕塑系就學時所養成的人體造型雕塑基本功為底，結合後期在美國知名視覺特效公司任職期間所練就的3D動畫技術，經過不斷探索，精鍊出一套整合了傳統雕塑技藝與現代數位技術的跨世代獨特全新創作手法──「時差雕塑」（Space in Time Sculpture），以觀賞視角多元豐富的360度全向式人像為媒介，置入時間元素來呈現過去、現在、未來不同時空的連續性，不僅打破傳統雕塑受限於單一時空的面向，也提供一種超越視覺的新體驗，為雕塑開啟了新的可能。作品看似靜止卻又像舞動跳躍著，也讓觀者感受到動靜之間，時空能量在作品裡流動，藉此體會當下的美好並珍惜寶貴有限的生命！</p>
            <p>Wang Xun was born in 1962 in Taitung, Taiwan. After graduating from the Department of Sculpture at the National Taiwan University of Arts and winning first prize at the 16th Taipei Fine Arts Exhibition under sculpture category in 1989, he went abroad for higher studies. He stayed at School of Visual Arts in New York City for one-year study firstly, then he got a master degree in Computer Animation from New York Institute of Technology two years later. After that, he was engaged in sculpture and computer modeling works for famous visual effects company “Rhythm and Hues Studio” in the United States for almost 13 years and had ever participated in the production of Hollywood movies, including “Golden Compass,” “Garfield 1&2,” “The Chronicles of Narnia,” “Daredevil,” “X-Men 2” and “Harry Potter and the Philosopher's Stone,” etc. In 2001, he obtained the United States Lawful Permanent Residency for his extraordinary ability in sculpture and 3D animation. His sculpture works are collected by Taipei Fine Arts Museum and National Taiwan Museum of Fine Arts.</p>
            <p>After returning to Taiwan in 2007, he began to play with human body modeling and basic sculptural skills, which he developed while studying in the Department of Sculpture at the National Taiwan University of Arts. In the process, he also integrated 3D animation skills acquired while working for a famous visual effects company in the United States. After continuous explorations, he refined a set of brand-new and unique cross-generational creative techniques integrating traditional sculptural methods with modern digital technology. The resulting “Space in Time Sculpture” applies the medium of 360-degree omnidirectional portrait that offers diverse viewing angles, inserting the element of time to present the space and time continuity of the past, present, and future. The presentation not only breaks free of the single space and time limitation of traditional sculpture, but also offers a new experience beyond the sense of sight, opening new sculptural possibilities. Looking still while also seemingly dancing around, the work allows viewers to feel the space-time energetic fluidity of the art in between movement and stillness, to appreciate and treasure every precious and fleeting moment in life!</p>
          </section>
          <hr />
          <article className="work work--competition-1">
            <h2 className="work__title">競爭1  Competition 1</h2>
            <p>銅、花崗岩底座 Bronze, Granite Base</p>
            <p>L52 x D15 x H29 cm (含底座)</p>
            <img src="/images/works/competition-1/1.jpg" alt="statue" />
            <img src="/images/works/competition-1/2.jpg" alt="statue" />
            <p>「競爭1」是結合動畫視覺藝術與視立體雕塑的創作開端，亦是王尋個人獨特的創作手法— 「時差雕塑」的第一次的展現成果。「競爭1」作品裏描寫的是人生的道路上追求的兩個座 標-起點與終點，每一個人的生命道路上總有著無數次的挑戰，每一片刻的挑戰，是萃取許多 的生存的條件，才使人們得以面對環境的適存性。而這個片刻，容王尋打住，用立體造型的 方式來呈現這個面對挑戰的競爭記憶，選擇讓過去、當下、未來的時間暫停，用記憶串連時 間、空間，讓記憶充滿了立體關係，讓一個充滿生命起點到終點的記憶歷程、以雕塑的方式 寫定這樣，型的結果。</p>
          </article>
          <article className="work work--love">
            <h2 className="work__title">愛  Love</h2>
            <p>銅、花崗岩底座 Bronze, Granite Base</p>
            <p>L25 x D25 x H21.5 cm (含底座)</p>
            <img src="/images/works/love/1.jpg" alt="statue" />
            <img src="/images/works/love/2.jpg" alt="statue" />
            <img src="/images/works/love/3.jpg" alt="statue" />
            <p>「愛」，提醒人們珍惜寶貴生命，並體會當下的美好，沒有愛我們一無所知 ! 因為，有限的生命剎那即逝 ! 此作品「型」展現了愛的千變萬化面向，因人體肢體的型態融入，塑造一種輕柔雲朵的型，一種剛硬固態的型；當人的肢體形象交集融合時，創造出重重覆覆、層層疊疊、虛虛實實的形象，深刻的表露岀愛的本質，展現出愛在心靈中的渴望，愛在彼此間的情不自禁，一切一切透過型的存在成就愛。愛是一種美感經驗的極致延伸，強烈的、想進入彼此心靈深處纏綿悱惻的造型，隱喻著生命活躍的能量與存在基本的原始價值。</p>
          </article>
          <article className="work work--expecting">
            <h2 className="work__title">期待 Expecting</h2>
            <p>銅、花崗岩底座 Bronze, Granite Base</p>
            <p>L12.5 x D15.5 x H38 cm (含底座)</p>
            <section className="work__imgs">
              <img src="/images/works/expecting/1.jpg" alt="statue" />
              <img src="/images/works/expecting/2.jpg" alt="statue" />
              <img src="/images/works/expecting/3.jpg" alt="statue" />
            </section>
            <p>「期待」，音如臍帶，生命的起源從胚胎開始，由母體內孕育出來，其過程，代表著就是每一個新生命對未來的期待。母親是我們的引領者，「臍帶」讓嬰兒與母親的關係緊緊相連著，也傳遞著母愛對新生命的「期待」。這個關係是在我們生命的道路上，唇齒相依，毎一個生命的都是天賜的禮物，在母親的臍帶線上繋著愛的期待。</p>
          </article>
          <article className="work work--first-step">
            <h2 className="work__title">第一步  First Step</h2>
            <p>銅、花崗岩底座 Bronze, Granite Base</p>
            <p>L75 x D15 x H29 cm (含底座)</p>
            <img src="/images/works/first-step/1.jpg" alt="statue" />
            <img src="/images/works/first-step/2.jpg" alt="statue" />
            <img src="/images/works/first-step/3.jpg" alt="statue" />
            <p>「第一步」，人生的第一步，一個新的開始，人生中，每一個新的開始，都代表著一個自我超越的第一步！作品中小孩學行走的連續肢體動作，傳達出難忘又刻骨銘心的記憶，因他的第一步，也是我們每一個人，生命最珍貴的第一步；第一步，記錄生命開端在時間裡變化，讓時間這麼抽象的一個概念，融入在雕塑裡。也藉由時差藝術觀念，讓時間和空間在每一個當下「共存」，讓看似靜止的雕塑有了視覺的新聚焦。時差藝術想帶領欣賞者，去體驗動靜之間，時空能量在作品裡流動，允許記憶串流時空，永遠存在。</p>
          </article>
          <article className="work work--turn-into-adult">
            <h2 className="work__title">轉大人 Turn into Adult</h2>
            <p>銅、花崗岩底座 Bronze, Granite Base</p>
            <p>L50 x D20 x H33.5 cm (含底座)</p>
            <img src="/images/works/turn-into-adult/1.jpg" alt="statue" />
            <img src="/images/works/turn-into-adult/2.jpg" alt="statue" />
            <img src="/images/works/turn-into-adult/3.jpg" alt="statue" />
            <p>「轉大人」是一個描寫六到十八歲生命成長過程的作品，也就是我創立的時差雕塑的代表作，講述在空間裡有序列動作的肢體語言故事，這過程中包含過去、當下、未來的時間。凡相信時間的人是不相信永恆，而時間與空間是兩個座標，決定了世界的對立性，而真正將這兩者合一的先決條件，就是用我們的記憶串連時間與空間。而我用型的方式來呈現這個記憶，讓時間呈現永恆。一個生命在青春期轉大人的過程中，容易被遺忘與消逝，但這是每一段生命特殊與珍貴的歷程，因此有「轉大人」的這件作品的出現，讓我們擁有永恆的年少成長的記憶，使記憶共存在時間與空間中。</p>
          </article>
        </div>
      </main>
    </Layout>
  )
}

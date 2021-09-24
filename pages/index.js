import Head from 'next/head';
import Layout from '../layout';

import WorksGrid from '../components/works-grid';

export default function Home() {
  return (
    <Layout noHeaderSpace>
      <main id='home'>
        <Head>
          <title>王尋 Wang Xun</title>
        </Head>
        <section className="hero">
          <h1>王尋<br />Wang Xun</h1>
          <img id="expo-poster" src="/images/art-taipei-2021.jpg" alt="expo poster" />
        </section>
        <WorksGrid />
        <div className="content">
          <section className="description">
            <p>Born in the era of traditional art craftsmanship alongside the rise of digital development, I am an artist who has had the chance to utilize both of these art forms. After studying at the sculpture department at the National Taiwan University of Arts, I developed the ability to sculpt human figures and acquired expertise in the art of sculpting. Striving to innovate on my artistic path, I went abroad for further studies. After I graduated from the New York Institute of Technology, I did 3D modeling work in a well-known visual effects company for nearly a decade, and I became well-versed in 3D animation and digital art production. All of these experiences inspired me to combine traditional and digital art mediums into a single piece of artwork. Through continuous exploration based on traditional skills, coupled with high-tech expertise, I cultivated a set of unique personal cross-generational artworks, what I call the "Space in Time" sculptures.</p>
            <h2>Space in Time</h2>
            <p>I based my sculptures on the concept of time as a dynamic and continuous construct. And the sequences of body movements tell stories of the past, the present, and the future. Anyone who focuses on only a single aspect of time can never envision eternity. Time and space are two worldly coordinates. The precondition for unifying the two is to connect them with our memory. And I present this memory in a stylized way, so that time appears eternal. Every life, every era, and every piece of history is a unique and precious part of our memory, but it disappears and becomes easily forgotten. Therefore, the "Space in Time" sculptures allow people to have eternal memories that coexist in both time and space.</p>
            <p>Aspects of time and space exist in any era, and art reflects the background of that world and its historical imprint. I wanted to use words and a new visual language to symbolize the sculptures of this era. I captured time in a capsule to record life's most vivid moments, reconceptualizing what "sculptures" are. I integrated time, an abstract concept, into physical sculptures, letting time and space coexist. They are now dancing and jumping, adding depth to the seemingly static sculptures and allowing collectors and audiences alike to experience the works' visual movement and the flowing energy. Time is fleeting, so I hope people may cherish and appreciate the beauty of our precious and limited life. </p>
          </section>
          <hr />
          <article className="work work--competition-1">
            <h2 className="work__title">競爭1  Competition 1</h2>
            <p>銅、花崗岩底座 Bronze, Granite Base</p>
            <p>L52 x D15 x H29 cm (含底座)</p>
            <img src="/images/works/competition-1/1.jpg" alt="statue" />
            <img src="/images/works/competition-1/2.jpg" alt="statue" />
            <p>「競爭1」是結合動畫視覺藝術與視立體雕塑的創作開端，亦是王尋個人獨特的創作手法— 「時差雕塑」的第一次的展現成果。「競爭1」作品裏描寫的是人生的道路上追求的兩個座 標-起點與終點，每一個人的生命道路上總有著無數次的挑戰，每一片刻的挑戰，是萃取許多 的生存的條件，才使人們得以面對環境的適存性。而這個片刻，容王尋打住，用立體造型的 方式來呈現這個面對挑戰的競爭記憶，選擇讓過去、當下、未來的時間暫停，用記憶串連時 間、空間，讓記憶充滿了立體關係，讓一個充滿生命起點到終點的記憶歷程、以雕塑的方式 寫定這樣，型的結果。</p>
            <p>"Competition 1" and "Competition 2" were my first attempts at combining digital and stereoscopic art forms, and ultimately the first displays of the "Space in Time" sculptures. These two sculptures describe the two opposite points in life, the start and the end. Each person encounters challenges in their lives, and each one of these obstacles demands them to adapt. I stopped time and presented these moments in a three-dimensional form, flowing with memories.</p>
          </article>
          <article className="work work--love">
            <h2 className="work__title">愛  Love</h2>
            <p>銅、花崗岩底座 Bronze, Granite Base</p>
            <p>L25 x D25 x H21.5 cm (含底座)</p>
            <img src="/images/works/love/1.jpg" alt="statue" />
            <img src="/images/works/love/2.jpg" alt="statue" />
            <img src="/images/works/love/3.jpg" alt="statue" />
            <p>「愛」，提醒人們珍惜寶貴生命，並體會當下的美好，沒有愛我們一無所知 ! 因為，有限的生命剎那即逝 ! 此作品「型」展現了愛的千變萬化面向，因人體肢體的型態融入，塑造一種輕柔雲朵的型，一種剛硬固態的型；當人的肢體形象交集融合時，創造出重重覆覆、層層疊疊、虛虛實實的形象，深刻的表露岀愛的本質，展現出愛在心靈中的渴望，愛在彼此間的情不自禁，一切一切透過型的存在成就愛。愛是一種美感經驗的極致延伸，強烈的、想進入彼此心靈深處纏綿悱惻的造型，隱喻著生命活躍的能量與存在基本的原始價值。</p>
            <p>"Love" reminds people to cherish their lives and experience the beauty of each moment. Nothing matters without love, and this work depicts its ever-changing aspects. The joining of the figures creates layers and makes the sculpture look both soft and hard at the same time. This image reveals the essence of love and the soul's desire to receive it. The sculpture demonstrates the attraction between two people, depicting the most beautiful aspect of their lives. The love is so strong that it wants to enter each other's hearts, becoming a metaphor for the vitality and the value of existence.</p>
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
            <p>Mothers are our life-givers, and "Expectation" shows life's origin, starting from the embryo in a mother's womb. She is expecting the birth of a new life, her own child. The sculpture conveys maternal love and the physical and metaphorical link between a mother and her child, starting from the beginning of our lives. Every life is a gift from heaven, tied to the mother's umbilical cord, the tool used in our first interactions.</p>
          </article>
          <article className="work work--first-step">
            <h2 className="work__title">第一步  First Step</h2>
            <p>銅、花崗岩底座 Bronze, Granite Base</p>
            <p>L75 x D15 x H29 cm (含底座)</p>
            <img src="/images/works/first-step/1.jpg" alt="statue" />
            <img src="/images/works/first-step/2.jpg" alt="statue" />
            <img src="/images/works/first-step/3.jpg" alt="statue" />
            <p>「第一步」，人生的第一步，一個新的開始，人生中，每一個新的開始，都代表著一個自我超越的第一步！作品中小孩學行走的連續肢體動作，傳達出難忘又刻骨銘心的記憶，因他的第一步，也是我們每一個人，生命最珍貴的第一步；第一步，記錄生命開端在時間裡變化，讓時間這麼抽象的一個概念，融入在雕塑裡。也藉由時差藝術觀念，讓時間和空間在每一個當下「共存」，讓看似靜止的雕塑有了視覺的新聚焦。時差藝術想帶領欣賞者，去體驗動靜之間，時空能量在作品裡流動，允許記憶串流時空，永遠存在。</p>
            <p>"First Step" depicts our first steps, symbolizing a new beginning. The child learning to walk conveys an unforgettable experience and represents one of the most precious moments of our lives. This sculpture records the beginning of exploration and change, integrating the abstract concept of time and letting time and space coexist. The sequential motion adds depth to the seemingly static sculptures, allowing collectors and audiences alike to experience the works' visual movement and the flowing energy, making memories to flow through time and space, combining the past, the present, and the future.</p>
          </article>
          <article className="work work--turn-into-adult">
            <h2 className="work__title">轉大人 Turn into Adult</h2>
            <p>銅、花崗岩底座 Bronze, Granite Base</p>
            <p>L50 x D20 x H33.5 cm (含底座)</p>
            <img src="/images/works/turn-into-adult/1.jpg" alt="statue" />
            <img src="/images/works/turn-into-adult/2.jpg" alt="statue" />
            <img src="/images/works/turn-into-adult/3.jpg" alt="statue" />
            <p>「轉大人」是一個描寫六到十八歲生命成長過程的作品，也就是我創立的時差雕塑的代表作，講述在空間裡有序列動作的肢體語言故事，這過程中包含過去、當下、未來的時間。凡相信時間的人是不相信永恆，而時間與空間是兩個座標，決定了世界的對立性，而真正將這兩者合一的先決條件，就是用我們的記憶串連時間與空間。而我用型的方式來呈現這個記憶，讓時間呈現永恆。一個生命在青春期轉大人的過程中，容易被遺忘與消逝，但這是每一段生命特殊與珍貴的歷程，因此有「轉大人」的這件作品的出現，讓我們擁有永恆的年少成長的記憶，使記憶共存在時間與空間中。</p>
            <p>"Turning to Adults" describes a person's transition from a child to a young adult, and I consider it to be my best work in the "Shape in Time" sculptures. The sequence of motion tells stories of the past, the present, and the future, and anyone who focuses on only a single aspect of time can never envision eternity. Time and space are two worldly coordinates, which we can unite by connecting them with our memory. And I presented this unity in a stylized way, so that time appears eternal. Even though our childhood is one of the most precious journeys of our lives, it becomes easily forgotten as we grow older. So I made this sculpture to let us view an eternal fragment of growth, making our memories coexist in both time and space.</p>
          </article>
        </div>
      </main>
    </Layout>
  )
}

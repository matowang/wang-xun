import Layout from '../../layout';

const Contacts = () => (
    < Layout >
        <main className="three-d-view" id="3d-seeking" dangerouslySetInnerHTML={{
            __html:
                `<div style="max-width: 800px; max-height: 501px;">
                    <div style="left: 0px; width: 100%; height: 0px; position: relative; padding-bottom: 62.625%; overflow: hidden;">
                        <iframe src="/animations/seeking_XR.4.wdgt/seeking_XR.4.html"
                                    allowfullscreen
                                    style="position: absolute; top: 0px; left: 0px; height: 100%; width: 1px; min-width: 100%; *width: 100%;"
                                    frameborder="0"
                                    scrolling="no">
                        </iframe>
                    </div>
                </div>`
        }}></main>
    </Layout >
)

export default Contacts;
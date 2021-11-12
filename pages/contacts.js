import Layout from '../layout';

const Contacts = () => (
    < Layout >
        <main id="contacts">
            <div className="content">
                <table className="contacts-table">
                    <tr>
                        <td>Résumé:</td>
                        <td><a href="/resume/morris-resume.pdf">Morris 履歷 PDF</a></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>wangmorris@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Line: </td>
                        <td>
                            <span>morriswang2000</span><br />
                            <img id="line-qr-code" src="/images/line-qr-code.jpg" alt="line qr code" />
                        </td>
                    </tr>
                </table>
            </div>
        </main>
    </Layout >
)

export default Contacts;
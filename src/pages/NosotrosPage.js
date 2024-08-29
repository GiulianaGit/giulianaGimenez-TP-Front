import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit cum tempus aptent, feugiat nibh nam pellentesque conubia fermentum proin morbi taciti fusce, tincidunt integer dui fames purus natoque non libero metus.</p>
                <p>Nisi odio taciti enim placerat turpis potenti suscipit fermentum malesuada per mi ornare, mollis vehicula risus facilisis imperdiet nullam tristique ut magna mauris. Dictum quam integer eros dignissim himenaeos ultrices dictumst varius scelerisque</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="/images/nosotros\persona.jpg" alt="Luciana Perez"/>
                        <h5>Luciana Perez</h5>
                        <h6>Gerente General</h6>
                        <p>Apasionada del arte</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;
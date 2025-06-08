import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import DoacaoPopup from "../components/Doacao/Doacao"; 

import ".././footer.css"

export const Contato = () => {
    const [chatVisivel, setChatVisivel] = React.useState(false);
    const [doacaoVisivel, setDoacaoVisivel] = React.useState(false);

    return (
        <>
            <Header
                onChatClick={() => setChatVisivel((v) => !v)}
                onDoacaoClick={() => setDoacaoVisivel((v) => !v)}
            />

            <div className="contato">
                <h1>Os nossos Contatos são</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor nam similique ab error hic doloremque aut, reiciendis nobis explicabo. Perferendis quod at dolores, nobis doloribus nemo sapiente sed dicta magnam.
                    Ab atque blanditiis iusto eaque, odit dolore animi asperiores rem quos, expedita dolorem veniam sunt quis, consequuntur error. Delectus ipsam quaerat corporis dignissimos voluptatem? Quae mollitia quisquam quos eos earum.
                    Excepturi, libero? Quibusdam cum ad culpa. Dolore ad non eaque vel, id quibusdam velit numquam quisquam cupiditate corrupti voluptates cumque nisi aliquam vitae eveniet delectus commodi veritatis incidunt veniam nesciunt.
                    Vero repellat itaque ipsum atque totam illum. Facere, veritatis nobis illum natus iusto dicta. Cumque earum autem labore sit minus harum aliquid ratione totam debitis fugit error, laudantium mollitia ducimus.
                    Qui ut nobis nulla fuga repudiandae consequuntur amet quas velit ducimus aut voluptates repellat et pariatur excepturi ab deserunt alias aspernatur, saepe placeat iste rerum quos modi harum magnam. Hic.
                </p>
            </div>

            <Footer />

            {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
            {doacaoVisivel && <DoacaoPopup onClose={() => setDoacaoVisivel(false)} />}
        </>
    );
};

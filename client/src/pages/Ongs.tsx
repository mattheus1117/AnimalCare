import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import DoacaoPopup from "../components/Doacao/Doacao";
import PerfilPopup from '../components/PerfilPopup';

import ".././css/style.css"
import ".././css/Ongs.css"

export const Ongs = () => {
    const [chatVisivel, setChatVisivel] = React.useState(false);
    const [doacaoVisivel, setDoacaoVisivel] = React.useState(false);
    const [perfilVisivel, setPerfilVisivel] = React.useState(false);

    return <>
        <Header
            onChatClick={() => setChatVisivel((v) => !v)}
            onDoacaoClick={() => setDoacaoVisivel((v) => !v)}
            onPerfilClick={() => setPerfilVisivel((v) => !v)}
        /> <div className="ongs">
            <h1>ONGs</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quaerat hic ex sapiente magni, maiores ipsam necessitatibus libero blanditiis odio optio officiis laborum aliquid eius qui reprehenderit ullam provident doloremque!
                Alias corporis, provident quod officia eius blanditiis tempora, iste, unde earum nesciunt numquam laborum doloremque. Fugit facilis reprehenderit voluptates possimus! Voluptates qui rem tempore optio nostrum, aspernatur corrupti ipsa cupiditate.
                Minus, dolores repellat sit aperiam illum molestiae. Fugit aspernatur unde exercitationem ab commodi? Earum quidem nemo voluptatum excepturi, voluptate adipisci quo perspiciatis vitae, temporibus laudantium reiciendis laborum? Quam, consectetur quo.
                Obcaecati, incidunt nemo praesentium a eligendi, eius tempora ab non cupiditate nobis ratione recusandae et inventore assumenda at magni cum sequi quam neque perspiciatis iusto doloribus delectus. Placeat, quas in.
                Dignissimos excepturi laborum exercitationem, eligendi expedita, soluta commodi vitae numquam est itaque a. Veniam, eaque maiores nemo sunt alias possimus! Minus maiores hic ex aliquam eius molestiae voluptatibus voluptate dolor.
                Mollitia molestias provident inventore pariatur minus quidem dolores quae accusantium earum nemo incidunt, at, velit ab laborum dolore temporibus impedit unde perferendis? Cupiditate error, blanditiis distinctio officiis tenetur vel quos.
                Facilis, corporis sunt quasi minus, aspernatur enim nam laborum, ex quos totam ipsam. Autem exercitationem laborum eius voluptatem, provident unde inventore vel fuga maiores, dolores non voluptas aperiam sapiente reiciendis?
                Expedita distinctio molestiae sequi nesciunt enim officia nobis ipsa dignissimos et, at nihil qui neque veniam mollitia sed reiciendis pariatur libero perferendis, cum dolor, exercitationem eligendi consectetur. Praesentium, corporis placeat.
                Expedita nam reiciendis, omnis dicta provident quia consequatur in est, illum voluptate nisi! At libero omnis suscipit asperiores ex quidem doloribus, facilis vitae cumque odio, id iure atque quia. Voluptatum!
                Id voluptas optio quibusdam esse rerum minus eaque, deserunt quidem atque explicabo aperiam soluta dolorem laudantium voluptates debitis ipsam laborum accusamus! Ad veritatis expedita cupiditate a sapiente error fugit inventore.

            </p></div>

        <Footer />

        {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
        {doacaoVisivel && <DoacaoPopup onClose={() => setDoacaoVisivel(false)} />}
        {perfilVisivel && <PerfilPopup onClose={() => setPerfilVisivel(false)} />}
    </>
}
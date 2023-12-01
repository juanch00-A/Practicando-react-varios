import { Twitter } from "./components/Twitter";

export const App = () => {
    return (
    <>
        <section>
            <Twitter  isFollowing userName='midudev' name='Another User'>
                Miguel Duran
            </Twitter>

            <Twitter isFollowing={false} userName='midudev' name='Another User' >
                Miguel Duran
            </Twitter> 
            
        </section>
    </>
    );
};

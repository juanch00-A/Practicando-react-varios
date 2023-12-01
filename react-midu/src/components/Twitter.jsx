export const Twitter = ({ userName, name, isFollowing }) => {
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    return (
        <>
            <article>
                <header>
                    <img src={`https://unavatar.io/${userName}`} alt="Avatar" />
                    <div>
                        <strong>{name}</strong>
                        <span>@{userName}</span>
                    </div>
                </header>

                <aside>
                    <button>{text}</button>
                </aside>
            </article>
        </>
    );
};

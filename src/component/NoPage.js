import '../styles/missing.css';

function NoPage(){

    return (
        <div className='backdrop'>
            <div className='frames'>
                <div className='no_frame'>
                    <br/>
                    <h2>404</h2>
                    <br/>
                    <p>This is not where you want to be.</p>
                    <br/><br/>
                    <a href='/'>
                        <button>HOME</button>
                    </a>
                </div>

                <div className='no-sd_frame'></div>
            </div>
        </div>
    )
}

export default NoPage;
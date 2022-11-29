import styled from 'styled-components'

const Spin = styled.div`
    border: 6px solid #f3f3f3;
    border-radius: 50%;
    border-top: 6px solid #3498db;
    width: 1.85rem;
    height: 1.85rem;
    -webkit-animation: spin 1s linear infinite; /* Safari */
    animation: spin 1s linear infinite;
    /* Safari */
    @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
`
const Spinner = () => {
    return (
        <div style={{width:'fit-content', margin:'0.625rem auto'}}>
            <Spin />
        </div>
    )
}

export default Spinner
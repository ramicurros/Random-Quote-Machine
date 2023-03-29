
function QuoteBox({quote, author}) {
    return (
        <>
            <p id='text' className='quote-text'>"{quote}"</p>
            <p id='author' className='quote-text'>{author}</p>
        </>
    );
}

export default QuoteBox;
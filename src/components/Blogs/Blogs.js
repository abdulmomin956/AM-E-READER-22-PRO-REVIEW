import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2 style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
            <h4>What is Semantic Tag in HTML?</h4>
            <p>
                <span className='ans'>Ans:</span> Sematic tags are those tags that are meaningful to both the developer and the browser. Semantic tags help the search engine to determine the content. Webpages with semantic tags are much easier to read. Different tags for different layouts. Some of semantic HTML tags are
                &lt;header&gt;, &lt;nav&gt;, &lt;article&gt;, etc.
            </p>
            <h4>What is the difference between inline and block elements in html?</h4>
            <p className='ans'>Ans:</p>
            <table style={{ borderCollapse: 'collapse' }} border='1px' width={'100%'}>
                <tr><th>Inline Element</th>
                    <th>Block Element</th></tr>
                <tr>
                    <td>
                        <li>Always takes up the full width available.</li>
                        <li>Never starts a new line for the HTML.</li>
                        <li>Inline elements can be nested between block and inline elements.</li>
                        <li>Inline elements create small structure.</li>
                        <li>Inline elements cannot take margin and padding space.</li>
                    </td>
                    <td>
                        <li>Takes up as much width as necessary.</li>
                        <li>Always starts a new line of the HTML.</li>
                        <li>Block elements cannot be nested between block and inline elements..</li>
                        <li>Block elements create large structure.</li>
                        <li>Block elements can take margin and padding space.</li>
                    </td>
                </tr>

            </table>
        </div>
    );
};

export default Blogs;
import React from 'react'
import './Modal.css'
const Modal = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <div className='Modal'>
            <button onClick={() => setOpen(true)}>Open</button>
            {
                open && (
                    <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt esse placeat tempora corporis exercitationem maiores quo ducimus minus, minima iusto voluptas eligendi laboriosam sint culpa, quisquam eius modi. Autem delectus quidem quaerat a pariatur repudiandae, minima laboriosam quasi commodi ullam, nostrum sunt consectetur qui dicta natus culpa! Error deserunt quis ullam laudantium ea, distinctio officia vero aut at, consequatur doloremque aliquam quos blanditiis voluptates! Labore, fugit. Expedita laborum aliquid tempore alias distinctio dignissimos repudiandae ratione, consequatur veniam quae, excepturi nam odit a error amet, nihil quos adipisci voluptatem laudantium. Eveniet ratione beatae sunt ut fuga aspernatur hic, quam porro alias.
                    <button onClick={() => setOpen(false)}>Close</button>
                    </div>
                )
            }
        </div>
    )
}

export default Modal
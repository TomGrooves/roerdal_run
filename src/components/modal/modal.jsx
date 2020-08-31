import React, {useState} from 'react'
import Style from '../modal/modal.module.scss';

function Modal (props) {

   /** Modal accepts these props
    *   * child (content in modal)
    *   * visible (boolean to check if shown)
    *   * setModalVisible (callback function to change boolean state)
    */

    const child = props.child || "No content"
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
        <section className={modalVisible ? Style.shown : Style.hidden}>
            <div className={Style.modalContent}>{child}
            <button className={Style.btn} onClick={()=>setModalVisible(false)}>Close Modal</button></div>
        </section>
        <button className={Style.btn} onClick={() => setModalVisible(true)}>Open Modal</button>
        </>
    )
}

export default Modal
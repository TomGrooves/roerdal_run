import React, { useContext, useEffect } from 'react'
import { AppContext } from "../../context/ContextProvider"
import DOMPurify from 'dompurify'
import Carousel from '../../components/carousel/carousel'
import Style from './signuppage.module.scss'
import Form from '../../components/form/form'

function SignupPage() {
    const { getPageContent, setPageData, pageData, submitted } = useContext(AppContext);

    useEffect(() => {
        getPageContent(3)
        setPageData(pageData)
    }, [])

    const formfields = [
        { name: "firstname", label: "Navn", type: "input", req: true },
        { name: "lastname", label: "Efternavn", type: "input", req: true },
        { name: "date", label: "Fødselsdag", type: "date", req: true },
        {
            name: "gender", label: "Køn", type: "select", req: true, selectOptions: [
                { name: "Mand", value: "m" },
                { name: "Kvinde", value: "f" },
            ]
        },
        { name: "email", label: "Email", type: "input", req: true },
        { name: "address", label: "Adresse", type: "input" },
        { name: "area", label: "Postnummer", type: "input" },
        { name: "city", label: "By", type: "input", req: true },
        { name: "phone", label: "Telefon", type: "input" },
        {
            name: "program", label: "Program", type: "select", req: true, selectOptions: [
                { name: "1 Mile", value: 3 },
                { name: "5 Km", value: 2 },
                { name: "10 Km", value: 1 },
            ]
        },
        { name: "comment", label: "Kommentar", type: "input" },
    ]

    return (
        <section className={Style.mainContainer}>
            <Carousel />
                <article className={Style.gridContainer}>
                    <h2>{pageData.item && pageData.item.title}</h2>
                    {pageData.item && <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(pageData.item.content) }}></div>}
                </article>

            <section className={Style.formContainer}>
                {!submitted && <Form formfields={formfields} />}
                {submitted &&
                    <div className={Style.gridContainer}>
                        <h2>Du er nu tilmeldt Rørdal Run</h2>
                        <p>Mange tak for din tilmelding. Du vil modtage en e-mail fra os med dit løbenummer, samt informationer vedr. Rørdal Run.</p>
                        <p>Tak og vi ses!</p>
                    </div>
                }
            </section>
        </section>
    )
}

export default SignupPage
import { useState, useEffect } from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'


function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:8080/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => setCategories(data))
            .catch((err) => console.log(err))

    }, [])
    // envia minha função que vem pela prop do elemento pai
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }
    //independente do que preencher vai mudar a propiedade do projeto text
    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
    }
    function handleCategory(e){
        setProject({
            ...project, 
            category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,

        }})

    }
    
    
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Nome do Projeto'
                name='name'
                placeholder='Insira o nome do projeto'
                handleOnchange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input
                type='number'
                text='valor do projeto'
                name='budget'
                placeholder='Insira o orçamento do projeto'
                handleOnchange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select
                name='category_id'
                text='Selecione uma categoria'
                options={categories}
                handleOnchange={handleCategory}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText} />

        </form>
    )
}

export default ProjectForm
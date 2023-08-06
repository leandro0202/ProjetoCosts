import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'


function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input
                type='text'
                text='Nome do Projeto'
                placeholder='Insira o nome do projeto'
            />
            <Input
                type='number'
                text='valor do projeto'
                name='budget'
                placeholder='Insira o orçamento do projeto'
            />
            <Select name='category_id' text='Selecione uma categoria'/>
            <SubmitButton  text={btnText}/>

        </form>
    )
}

export default ProjectForm
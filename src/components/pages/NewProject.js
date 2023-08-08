import { useNavigate } from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject() {


  //permite fazer redirect nas paginas do sistema
  const history = useNavigate()

  //função que vai criar post no sistema
  function createPost(project) {

    //initialize cost and services
    project.cost = 0
    project.services = []

    fetch('http://localhost:8080/projects', {

      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((err)  => console.log(err))

    history('/projects', {message : "Projeto criado com sucesso!"});

  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu Projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText='Criar Projeto' />
    </div>
  )
}

export default NewProject
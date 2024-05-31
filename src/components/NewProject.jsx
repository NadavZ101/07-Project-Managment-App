import { useRef } from "react";
import { Input } from "./Input";
import { Modal } from "./Modal";

export function NewProject({ onSaveProject, onCancelProject }) {

    const modal = useRef()

    const title = useRef()
    const description = useRef()
    const dueDate = useRef()

    function handleSave() {
        const projectTitle = title.current.value
        const projectDescription = description.current.value
        const projectDueDate = dueDate.current.value

        if (projectTitle.trim() === '' ||
            projectDescription.trim() === '' ||
            projectDueDate.trim() === '') {

            modal.current.open()
            return
        }

        onSaveProject({
            title: projectTitle,
            description: projectDescription,
            dueDate: projectDueDate
        })
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2>Invalid Input</h2>
                <p>Please make sure to provide valid values</p>
            </Modal>
            <div className="input-container">
                <h1>Create A New Project</h1>
                <menu className="action-btns">
                    <li><button onClick={onCancelProject}>Cancel</button></li>
                    <li><button onClick={handleSave}>Save</button></li>
                </menu>

                <div>
                    <Input ref={title} type="text" label="Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input ref={dueDate} type="date" label="Due date" />
                </div>
            </div>
        </>
    )
}
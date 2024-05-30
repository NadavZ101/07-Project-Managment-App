import { useRef } from "react";
import { Input } from "./Input";
import { Modal } from "./Modal";

export function NewProject({ onSaveProject }) {

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

            //Show Error Modal
        }


        onSaveProject({
            title: projectTitle,
            description: projectDescription,
            dueDate: projectDueDate
        })
    }

    return (
        <>
            <Modal ref={modal} />
            <div className="input-container">
                <menu className="action-btns">
                    <li><button>Cancel</button></li>
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
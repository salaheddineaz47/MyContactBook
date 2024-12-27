import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
    try {
        await deleteContact(params.contactId);
        return redirect("/");
    } catch (error) {
        console.error("Error deleting contact:", error);
        return redirect("/error");
    }
}

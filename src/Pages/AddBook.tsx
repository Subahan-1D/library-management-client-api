import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router";
import Banner from "./Banner";

const bookSchema = z.object({
    title: z.string().min(1, "Title is required"),
    author: z.string().min(1, "Author is required"),
    genre: z.enum(["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"]),
    isbn: z.string().min(1, "ISBN is required"),
    description: z.string().optional(),
    copies: z.coerce.number().min(1, "At least 1 copy required"),
    available: z.boolean(),
});

type BookFormData = z.infer<typeof bookSchema>;

const AddBook = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm<BookFormData>({
        resolver: zodResolver(bookSchema),
        defaultValues: {
            available: true,
        }
    });

    const onSubmit = data => console.log(data);


    return (
        <div className="w-full">
            <div>
                <Banner title="Add a Book"></Banner>
            </div>
            <div className="text-black max-w-6xl w-5xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-md border border-green-500">
                <h2 className="text-2xl font-bold mb-6 text-center">Add a New <span className="text-emerald-600">Book</span></h2>
                <p className="text-gray-600 mb-6 text-center">Please fill out the form below to add a new book to the library.</p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium">Title</label>
                        <input
                            {...register("title")}
                            className="mt-1 w-full px-4 py-2 border rounded-md border-gray-300"
                            placeholder="Book Title"
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Author</label>
                        <input
                            {...register("author")}
                            className="mt-1 w-full px-4 py-2 border rounded-md border-gray-300"
                            placeholder="Author Name"
                        />
                        {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Genre</label>
                        <select
                            {...register("genre")}
                            className="mt-1 w-full px-4 py-2 border rounded-md border-gray-300"
                        >
                            <option value="FICTION">Fiction</option>
                            <option value="NON_FICTION">Non-Fiction</option>
                            <option value="SCIENCE">Science</option>
                            <option value="HISTORY">History</option>
                            <option value="BIOGRAPHY">Biography</option>
                            <option value="FANTASY">Fantasy</option>
                        </select>
                        {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">ISBN</label>
                        <input
                            {...register("isbn")}
                            className="mt-1 w-full px-4 py-2 border rounded-md border-gray-300"
                            placeholder="ISBN Number"
                        />
                        {errors.isbn && <p className="text-red-500 text-sm">{errors.isbn.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                            {...register("description")}
                            className="mt-1 w-full px-4 py-2 border rounded-md border-gray-300"
                            placeholder="Optional description..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Copies</label>
                        <input
                            type="number"
                            {...register("copies")}
                            className="mt-1 w-full px-4 py-2 border rounded-md border-gray-300"
                            placeholder="Number of copies"
                        />
                        {errors.copies && <p className="text-red-500 text-sm">{errors.copies.message}</p>}
                    </div>



                    <button
                        type="submit"
                        className="btn border-none w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                    >
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";

import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useBorrowBookMutation } from "@/redux/features/api/libraryApi";
import { Button } from "./ui/button";
import type { IBook } from "@/redux/interfeces/interfaces";

interface ModalProps {
  book: IBook;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Modal = ({ book, open, setOpen }: ModalProps) => {
  const [borrowBook] = useBorrowBookMutation();
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

const handleSubmit = async () => {
  try {
    await borrowBook({
      book: book._id,
      quantity,
      dueDate
    }).unwrap();

    Swal.fire({
      title: 'Success!',
      text: 'Book borrowed successfully',
      icon: 'success',
      confirmButtonText: 'OK'
    });

    navigate('/borrowSummary');
  } catch (error) {
    console.log(error)
    Swal.fire({
      title: 'Error!',
      text: 'Failed to borrow book',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Borrow "{book.title}"</DialogTitle>
          <DialogDescription>
            Please enter the quantity and due date for borrowing this book.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Quantity
            </Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              max={book.copies}
              value={quantity}
              onChange={(e) => setQuantity(Math.min(Number(e.target.value), book.copies))}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dueDate" className="text-right">
              Due Date
            </Label>
            <Input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="col-span-3"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <p className="text-sm text-gray-500">
            Available copies: {book.copies}
          </p>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={!quantity || !dueDate || quantity > book.copies}
          >
            Borrow
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
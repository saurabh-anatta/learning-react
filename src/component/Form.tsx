import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Categories from "../Categories";
import { z } from "zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be tleast 3 character long" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01)
    .max(1000),
  category: z.enum(Categories, {
    errorMap: () => ({ message: "Catgegory is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  updateExpenseList: (data: {
    description: string;
    amount: number;
    category: string;
  }) => void;
}

function Form({ updateExpenseList }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FieldValues) => {
    updateExpenseList({
      description: String(data.description),
      amount: Number(data.amount),
      category: String(data.category),
    });

    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="description"
        />
        {errors.description && <p>{errors.description.message}</p>}
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="text"
          className="form-control"
          id="amount"
        />
        {errors.amount && <p>{errors.amount.message}</p>}
        <label htmlFor="amount" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          name="category"
          className="form-control"
          id="category"
        >
          <option value=""></option>
          {Categories.map((category) => (
            <option value="{category}">{category}</option>
          ))}
        </select>
        {errors.category && <p>{errors.category.message}</p>}
        <button type="submit" className="btn btn-primary mt-2">
          Save
        </button>
      </div>
    </form>
  );
}

export default Form;

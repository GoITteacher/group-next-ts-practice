"use client";

import { refreshUser } from "@/services/songs";
import css from "./Form1.module.css";

const Form1 = () => {
  // const userMutation = useMutation({
  //     mutationKey: 'create-user',
  //     mutationFn: (user: User)=>refreshUser(user),
  //     onSuccess: ()=>{
  //     }
  // })

  const handleSubmit = async (formData: FormData) => {
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      color: formData.get("color") as string,

      delivery: formData.get("delivery") as string,
      country: formData.getAll("country") as string[],
      subscription: formData.get("subscription") as string,

      price: Number(formData.get("price")),

      accept: Boolean(formData.get("accept")),
    };

    console.log(data);

    // const res = await refreshUser();
  };

  return (
    <form className={css["form"]} action={handleSubmit}>
      <label>
        <span>Email</span>
        <input type="email" name="email" placeholder="Email" />
      </label>

      <label>
        <span>Password</span>
        <input type="password" name="password" placeholder="Password" />
      </label>

      <label>
        <span>Color</span>
        <input type="color" name="color" />
      </label>

      <label>
        <span>Price</span>
        <input type="number" name="price" />
      </label>

      <fieldset>
        <p>Delivery</p>

        <label>
          <input type="radio" name="delivery" value="дроном" defaultChecked />
          <span>дроном</span>
        </label>

        <label>
          <input type="radio" name="delivery" value="курьером" />
          <span>курьером</span>
        </label>

        <label>
          <input type="radio" name="delivery" value="самовивіз" />
          <span>самовивіз</span>
        </label>
      </fieldset>

      <fieldset>
        <p>Country</p>
        <label>
          <input
            type="checkbox"
            name="country"
            value="Україна"
            defaultChecked
          />
          <span></span>
        </label>

        <label>
          <input type="checkbox" name="country" value="Польща" />
          <span></span>
        </label>

        <label>
          <input type="checkbox" name="country" value="Чехія" />
          <span></span>
        </label>
      </fieldset>

      <select name="subscription">
        <option value="weekly">Тижнева</option>
        <option value="monthly">Місячна</option>
        <option value="annual">Річна</option>
      </select>

      <label>
        <input type="checkbox" name="accept" />
        <span>Чи погоджуєтесь ви на опрацювання ваших особ. даних</span>
      </label>

      <button type="submit">Відправити заявку</button>
    </form>
  );
};

export default Form1;

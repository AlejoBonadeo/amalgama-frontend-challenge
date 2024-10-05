import React, { useState, ChangeEvent, FormEvent } from "react";
import { useAuthStore } from "../2-routes/authStore";

interface LoginForm {
  email: string;
  password: string;
}

const initialForm: LoginForm = {
  email: "",
  password: "",
};

export const Login = () => {
  const [form, setForm] = useState<LoginForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { setUser } = useAuthStore();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("email", form.email);
    data.append("password", form.password);

    try {
      const res = await fetch(
        "https://2v234d7xc7.execute-api.us-east-1.amazonaws.com/default/login",
        {
          method: "POST",
          body: data,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.status === 401) {
        setError("Email o contraseña incorrectos");
        setLoading(false);
        return;
      }

      const user = await res.json();
      setUser(user);
    } catch (error) {
      setError("Ocurrió un error inesperado");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          onChange={onChange}
          value={form.email}
        />
        <input
          name="password"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        <button type="submit" disabled={loading}>
          Log In
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  function submitForm() {
    reset();
    setSuccess(true);
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className="bg-white p-6 shadow-soft">
      <h2 className="text-xl font-semibold text-ink">Форма зворотного зв'язку</h2>
      <div className="mt-5 grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Ім'я
          <input
            {...register("name", {
              required: "Заповніть усі поля форми.",
              onChange: () => setSuccess(false)
            })}
            className="border border-slate-300 px-3 py-2 font-normal text-slate-800 outline-none transition focus:border-jade"
            type="text"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Email
          <input
            {...register("email", {
              required: "Заповніть усі поля форми.",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Введіть коректну email-адресу."
              },
              onChange: () => setSuccess(false)
            })}
            className="border border-slate-300 px-3 py-2 font-normal text-slate-800 outline-none transition focus:border-jade"
            type="email"
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Тема
          <input
            {...register("subject", {
              required: "Заповніть усі поля форми.",
              onChange: () => setSuccess(false)
            })}
            className="border border-slate-300 px-3 py-2 font-normal text-slate-800 outline-none transition focus:border-jade"
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Повідомлення
          <textarea
            {...register("message", {
              required: "Заповніть усі поля форми.",
              onChange: () => setSuccess(false)
            })}
            className="min-h-28 resize-y border border-slate-300 px-3 py-2 font-normal text-slate-800 outline-none transition focus:border-jade"
          />
        </label>
      </div>
      {Object.values(errors)[0]?.message && (
        <p className="mt-4 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">
          {Object.values(errors)[0]?.message}
        </p>
      )}
      {success && (
        <p className="mt-4 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
          Дякуємо! Повідомлення прийнято для демонстрації.
        </p>
      )}
      <button
        type="submit"
        className="mt-5 bg-museum px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
      >
        Надіслати
      </button>
    </form>
  );
}

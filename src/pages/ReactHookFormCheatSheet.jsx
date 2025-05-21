// Cheat Sheet React Hook Form, Zod, @hookform/resolvers bel Tunisien + UI mzyena b Tailwind

export default function ReactHookFormCheatSheet() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-sans bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Cheat Sheet : <span className="text-blue-600">react-hook-form</span>,{" "}
        <span className="text-green-600">zod</span>,{" "}
        <span className="text-purple-600">@hookform/resolvers</span>
      </h1>
      <p className="text-gray-700 mb-6 text-center">
        <b>react-hook-form</b> ykhalik taamel forms f React b chwaya code w
        performance mrigla.
        <b>zod</b> houwa schema validation library, t9oul bih shnowa el format
        mta3 el data mte3ek.
        <b>@hookform/resolvers</b> yconnecti zod b react-hook-form bech
        validation tkoun automatique w easy.
      </p>
      <hr className="my-4" />

      {/* Installation */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Installation</h2>
        <div className="bg-gray-900 text-green-400 p-3 rounded mb-2 text-sm overflow-x-auto">
          npm install react-hook-form zod @hookform/resolvers
        </div>
        <p className="text-gray-600">
          T7eb taawed el setup, s7el barcha : installi hadha el code fel
          terminal mte3 projet mte3ek.
        </p>
      </section>

      {/* Basic Usage */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          2. Forma shla b react-hook-form
        </h2>
        <p className="mb-2 text-gray-600">
          Form mouch ma3mloula validation b zod, ama simple w tawa nwarik kifeh.
        </p>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`import { useForm } from "react-hook-form";
  
  function BasicForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username", { required: "Nom obligatoire" })} />
        {errors.username && <span>{errors.username.message}</span>}
        <input type="submit" />
      </form>
    );
  }`}
        </pre>
        <p className="text-gray-500 text-sm">
          Taawed input, tregisteriha, taawed submit, barcha s7el!
        </p>
      </section>

      {/* Integrating zod schema */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. Validation avec <span className="text-green-600">zod</span>
        </h2>
        <p className="text-gray-600">
          T7eb validation 3la el inputs mte3ek? Zod yjibha typesafe w
          declarative, w @hookform/resolvers yconnecti kol chay.
        </p>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`import { useForm } from "react-hook-form";
  import { z } from "zod";
  import { zodResolver } from "@hookform/resolvers/zod";
  
  const schema = z.object({
    email: z.string().email("Email mch sahih"),
    password: z.string().min(6, "Ilzem 6 7orouf wala akther"),
  });
  
  function ZodForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(schema),
    });
    const onSubmit = data => console.log(data);
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} placeholder="Email" />
        {errors.email && <span>{errors.email.message}</span>}
        <input {...register("password")} type="password" placeholder="Mot de passe" />
        {errors.password && <span>{errors.password.message}</span>}
        <button type="submit">Envoyer</button>
      </form>
    );
  }`}
        </pre>
        <p className="text-gray-500 text-sm">
          Zod howa elli y3ayet 3lehom mouch correct, w error yetla3 ta7t input.
        </p>
      </section>

      {/* Full Example with Nested, Array, and Custom Validations */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          4. Validation mzyena (nested, arrays, custom rules)
        </h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`const schema = z.object({
    profile: z.object({
      firstName: z.string().min(1, "Obligatoire"),
      lastName: z.string().min(1, "Obligatoire"),
    }),
    tags: z.array(z.string().min(1)).min(1, "Dakhoul tag wahed 9alil"),
    age: z.number().min(18, "Lazem tkoun 18+").max(120),
    password: z.string().refine(val => /[A-Z]/.test(val), "Ilzem 7arf kbir")
  });
  `}
        </pre>
        <p className="text-gray-500 text-sm">
          Tnajjem taawed validation 3la array, nested objects, w 7atta custom
          logic.
        </p>
      </section>

      {/* Set Default Values */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          5. Default values fel forma
        </h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "foulen@example.com",
      password: "",
    }
  });
  // reset({ ... }) tbadl values b click wala action okhr
  `}
        </pre>
      </section>

      {/* Custom Validation with zod */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          6. Custom validation b zod
        </h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`const schema = z.object({
    password: z.string()
      .min(8)
      .refine(val => /[0-9]/.test(val), "Ilzem ra9m")
      .refine(val => /[A-Z]/.test(val), "Ilzem 7arf kbir"),
  });
  `}
        </pre>
        <p className="text-gray-500 text-sm">
          Validation specifica: t7eb password fih ra9m w 7arf kbir? Zod ykhalik
          t3ayyet 3leha b el refine.
        </p>
      </section>

      {/* Show all error messages */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Affichage koll errors</h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`{errors && Object.values(errors).map(err => (
    <p className="text-red-600">{err.message}</p>
  ))}`}
        </pre>
      </section>

      {/* Watching, Resetting, and Mutating Fields */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          8. Watch, reset, w setValue
        </h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`const { register, handleSubmit, watch, reset, setValue } = useForm();
  // watch() ykhalik tchoof el values en temps réel
  // reset({ ... }) tabda forma men loul
  // setValue("email", "jadid@email.com") tbadel value b yedik
  `}
        </pre>
      </section>

      {/* Conditional Fields and Dynamic Arrays */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          9. Dynamic fields b useFieldArray
        </h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`import { useForm, useFieldArray } from "react-hook-form";
  
  function DynamicForm() {
    const { register, control, handleSubmit } = useForm({
      defaultValues: { emails: [{ value: "" }] }
    });
    const { fields, append, remove } = useFieldArray({ control, name: "emails" });
  
    return (
      <form onSubmit={handleSubmit(console.log)}>
        {fields.map((field, i) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <input {...register(\`emails.\${i}.value\`)} placeholder="Email" />
            <button type="button" onClick={() => remove(i)} className="text-red-500">X</button>
          </div>
        ))}
        <button type="button" onClick={() => append({ value: "" })}>Add Email</button>
        <button type="submit">Submit</button>
      </form>
    );
  }
  `}
        </pre>
        <p className="text-gray-500 text-sm">
          Add/Remove fields dynamic: exemple formulaire barka emails.
        </p>
      </section>

      {/* Form Submission & Error Handling */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          10. Gestion errors men server
        </h2>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
          {`function MyForm() {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
      try {
        await apiCall(data); // ki server ybadel error
      } catch (e) {
        setError("email", { message: "Email deja existi!" });
      }
    };
    // ...
  }
  `}
        </pre>
        <p className="text-gray-500 text-sm">
          setError ykhalik taawed erreur men server direct fel forma.
        </p>
      </section>

      <div className="mt-8 text-center text-xs text-gray-500">
        Kol chay s7el, ta3allem w zid 3la rouhek! 🇹🇳
      </div>
    </div>
  );
}

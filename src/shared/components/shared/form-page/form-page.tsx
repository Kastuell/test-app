"use client";

import { FormFields, formSchema } from "@/shared/constants/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Input, Select, TextArea } from "../../ui";
import styles from "./form-page.module.scss";

export const FormPage = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   country_made: "",
    //   format: "",
    //   genre: "",
    //   name: "",
    //   price: undefined,
    //   synopsis: "",
    //   unf: undefined,
    // },
  });

  function onSubmit(data: FormFields) {
    console.log(formSchema.parse(data));
    console.log(data);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form_header}>
        <h1 className={styles.form_title}>
          Производственные
          <br /> параметры фильма
        </h1>
        <button onClick={() => reset()} className={styles.btn_cancel}>
          Отменить заполнение
        </button>
      </div>
      <div className={styles.form_body}>
        <div className={styles.form_left_side}>
          <Input
            {...register("name")}
            placeholder="Название"
            label="Название проекта"
            error={errors.name}
          />
          <Select
            {...register("genre")}
            items={["qwe"]}
            label="Жанр"
            placeholder="Жанр"
            error={errors.genre}
          />
          <Select
            {...register("format")}
            items={["qwe1"]}
            label="Формат (для онлайн-платформ, большого экрана, интернета, другое)"
            placeholder="Формат"
            error={errors.genre}
          />
          <Input
            {...register("unf")}
            placeholder="890-000-000-00-000"
            label="№ УНФ или отсутствует"
            type="number"
            error={errors.unf}
          />
        </div>
        <div className={styles.form_right_side}>
          <Select
            items={["Россия"]}
            {...register("country_made")}
            placeholder="Страна"
            label="Страна-производитель (копродукция)"
            error={errors.country_made}
          />
          <Input
            {...register("price")}
            placeholder="Сметная стоимость"
            label="Сведения о сметной стоимости производства фильма 
                   на территории Нижегородской области, если есть"
            type="number"
            error={errors.price}
          />
          <TextArea
            {...register("synopsis")}
            placeholder="Напишите краткое изложение"
            label="Синопсис"
            error={errors.synopsis}
          />
        </div>
      </div>
      <div className={styles.form_footer}>
        <div />
        <div></div>
        <button className={styles.btn_next} type="submit">
          Следующий шаг{" "}
          <Image src={"/images/next.svg"} alt="" width={16} height={13} />
        </button>
      </div>
    </form>
  );
};

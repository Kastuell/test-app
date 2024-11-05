"use client";

import { FormFields, formSchema } from "@/shared/constants/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Button, Input, Pagination, Select, TextArea } from "../ui";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { withMask } from "use-mask-input";

export const FormPage = () => {
  const getSavedValues = () => {
    const savedValues = localStorage.getItem("savedValues");
    if (!savedValues)
      return {
        country_made: "",
        format: "",
        genre: "",
        name: "",
        price: null,
        synopsis: "",
        unf: null,
      };

    return JSON.parse(savedValues);
  };

  const [values] = useState(getSavedValues());

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...values,
    },
  });

  function onSubmit(data: FormFields) {
    console.log(data);
    localStorage.setItem("savedValues", JSON.stringify(data));
  }

  const [coutries, setCountries] = useState<any[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://namaztimes.kz/ru/api/country?type=json"
      ).then((res) => res.json());

      setCountries(
        Object.values(res).sort(function (x, y) {
          return x == "Российская Федерация"
            ? -1
            : y == "Российская Федерация"
            ? 1
            : 0;
        })
      );
    };

    fetchData();
  }, []);

  const resetData = () => {
    reset();
    localStorage.removeItem("savedValues");
  };

  return (
    <form
      className="container mx-auto mt-10 md:mt-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <h1 className="text-2xl md:text-3xl lg:5xl font-semibold">
          Производственные
          <br /> параметры фильма
        </h1>
        <Button onClick={() => resetData()}>Отменить заполнение</Button>
      </div>
      <div className="flex flex-col gap-5 md:flex-row items-center md:justify-between md:gap-10 lg:gap-[123px] mt-14 lg:mt-28">
        <div className="flex flex-col justify-between gap-[25px]">
          <Input
            {...register("name")}
            placeholder="Название"
            label="Название проекта"
            error={errors.name}
          />
          <Select
            {...register("genre")}
            items={["Боевик", "Детектив", "Романтика"]}
            label="Жанр"
            placeholder="Жанр"
            error={errors.genre}
          />
          <Select
            {...register("format")}
            items={["MP4", "WebM", "MOV"]}
            label="Формат (для онлайн-платформ, большого экрана, интернета, другое)"
            placeholder="Формат"
            error={errors.format}
          />
          <Input
            {...register("unf")}
            placeholder="890-000-000-00-000"
            label="№ УНФ или отсутствует"
            error={errors.unf}
            ref={withMask('999-999-999-99-999')}
          />
        </div>
        <div className="flex flex-col justify-between gap-[25px]">
          <Select
            items={coutries ?? []}
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
      <div className="lg:mt-[98px] mt-10 items-center flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-[218px]">
        <div className="basis-1/3 hidden lg:block" />
        <Pagination />
        <Button
          disabled={Object.keys(errors).length !== 0}
          type="submit"
          className={clsx({
            ["lg:basis-1/3 order-1 lg:order-2"]: true,
            ["cursor-not-allowed"]: Object.keys(errors).length !== 0,
            ["animate-pulse"]: Object.keys(errors).length == 0,
          })}
        >
          Следующий шаг{" "}
          <Image src={"/images/next.svg"} alt="" width={16} height={13} />
        </Button>
      </div>
    </form>
  );
};

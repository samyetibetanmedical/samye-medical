export const scrollTo = (where: string) => {
    document.getElementById(where)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
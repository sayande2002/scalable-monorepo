import { Button, Header } from "ui";

export default function Page() {
  return (
    <>
      <Header text="Web" />
      <Button />
      <h1>{process.env.APP_ENV}</h1>
      <h1>{process.env.APP_ENV_TWO}</h1>
      <h1>{process.env.PRISMA_ENV}</h1>
      <h1>{process.env.PRISMA_ENV_TWO}</h1>
      <h1>{process.env.GLOBAL_ENV}</h1>
      <h1>{process.env.GLOBAL_ENV_TWO}</h1>
    </>
  );
}

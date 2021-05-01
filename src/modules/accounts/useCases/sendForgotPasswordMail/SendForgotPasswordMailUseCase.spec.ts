import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/Implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";

import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let mailProvider: MailProviderInMemory;

describe("Send Forgot Mail", () => {
  beforeEach(() => {
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    mailProvider = new MailProviderInMemory();
    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });

  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = spyOn(mailProvider, "sendMail");
    await usersRepositoryInMemory.create({
      driver_license: "744685",
      email: "ineci@cawiwupu.md",
      name: "Verna Hayes",
      password: "33014",
    });

    await sendForgotPasswordMailUseCase.execute("ineci@cawiwupu.md");
    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an email if user doesn't exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("weza@pecsiami.bs")
    ).rejects.toEqual(new AppError("User doesn't exists!"));
  });

  it("should be able to create an users token", async () => {
    const generateTokenMail = spyOn(usersTokensRepositoryInMemory, "create");

    await usersRepositoryInMemory.create({
      driver_license: "126101",
      email: "hi@ravek.de",
      name: "Maria Shaw",
      password: "33014",
    });

    await sendForgotPasswordMailUseCase.execute("hi@ravek.de");

    expect(generateTokenMail).toBeCalled();
  });
});

import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Available Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });
  it("Should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Description Car1",
      daily_rate: 110,
      license_plate: "XXX-9999",
      fine_amount: 40,
      brand: "Car1 Brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Description Car2",
      daily_rate: 110,
      license_plate: "XXX-9999",
      fine_amount: 40,
      brand: "Car2 Brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({ name: "Car2" });
    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Description Car3",
      daily_rate: 110,
      license_plate: "XXX-9999",
      fine_amount: 40,
      brand: "Car3 Brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "category_id",
    });
    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car4",
      description: "Description Car4",
      daily_rate: 110,
      license_plate: "XXX-9999",
      fine_amount: 40,
      brand: "Car4 Brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car1 Brand",
    });
    expect(cars).toEqual([car]);
  });
});

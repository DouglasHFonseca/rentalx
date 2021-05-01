import { getRepository, Repository } from "typeorm";

import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";

import { CarImage } from "../entities/CarImage";

class CarsImagesRepository implements ICarsImagesRepository {
  private repository: Repository<CarImage>;
  constructor() {
    this.repository = getRepository(CarImage);
  }

  async create(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = this.repository.create({
      car_id,
      image_name,
    });

    await this.repository.save(carImage);

    return carImage;
  }
  async findByIdCar(car_id: string): Promise<CarImage> {
    return this.repository.findOne({ car_id });
  }

  async findByImageName(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = this.repository
      .createQueryBuilder("carImages")
      .where("car_id = :car_id", { car_id })
      .andWhere("image_name = :image_name", { image_name });
    return carImage.getOne();
  }

  async deleteCarImages(car_id: string): Promise<void> {
    await this.repository.query("DELETE FROM cars_image WHERE car_id=$1", [
      car_id,
    ]);
  }
}

export { CarsImagesRepository };

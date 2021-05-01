import { inject, injectable } from "tsyringe";

import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { AppError } from "@shared/errors/AppError";
import { deleteFile } from "@utils/file";

interface IRequest {
  car_id: string;
  images_name: string[];
}

@injectable()
class UploadCarImagesUseCase {
  constructor(
    @inject("CarsImagesRepository")
    private carsImagesRepository: ICarsImagesRepository
  ) {}
  async execute({ car_id, images_name }: IRequest): Promise<void> {
    const carExists = await this.carsImagesRepository.findByIdCar(car_id);
    console.log(carExists);
    if (carExists) {
      await this.carsImagesRepository.deleteCarImages(car_id);
      images_name.map(async (image) => {
        await this.carsImagesRepository.create(car_id, image);
        await deleteFile(`./tmp/cars/${image}`);
      });
    } else {
      images_name.map(async (image) => {
        await this.carsImagesRepository.create(car_id, image);
        await deleteFile(`./tmp/cars/${image}`);
      });
    }
  }
}

export { UploadCarImagesUseCase };

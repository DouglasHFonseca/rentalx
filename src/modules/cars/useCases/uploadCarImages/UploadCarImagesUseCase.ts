import { inject, injectable } from "tsyringe";

import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";
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
    private carsImagesRepository: ICarsImagesRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}
  async execute({ car_id, images_name }: IRequest): Promise<void> {
    const carExists = await this.carsImagesRepository.findByIdCar(car_id);
    if (carExists) {
      await this.carsImagesRepository.deleteCarImages(car_id);
      images_name.map(async (image) => {
        await this.storageProvider.delete(image, "cars");
      });
      images_name.map(async (image) => {
        await this.carsImagesRepository.create(car_id, image);
        await this.storageProvider.save(image, "cars");
        await deleteFile(`./tmp/cars/${image}`);
      });
    } else {
      images_name.map(async (image) => {
        await this.carsImagesRepository.create(car_id, image);
        await this.storageProvider.save(image, "cars");
        await deleteFile(`./tmp/cars/${image}`);
      });
    }
  }
}

export { UploadCarImagesUseCase };

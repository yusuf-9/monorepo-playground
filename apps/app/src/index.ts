import { generateId } from "@repo/utils";
import { createLogger } from "@repo/services";

const logger = createLogger("MyApp");
const id: string = generateId();

logger.info("Application started");
logger.log(`Generated ID: ${id}`);

import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";

faker.seed(123);

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer,
    },

    models: {
      user: Model,
    },

    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("users");
    },

    seeds(server) {
      [...Array(50)].forEach((_) => {
        server.create("user", {
          _id: faker.datatype.uuid(),
          name: faker.name.findName(),
          image: faker.image.people(),
          email: faker.internet.email(),
          address: faker.address.city(),
          username: faker.internet.userName(),

          designation: faker.random.arrayElement([
            "Student",
            "Professor",
            "Alumini",
          ]),
          post: [
            {
              postId: faker.datatype.uuid(),
              postDetail: faker.lorem.paragraph(),
            },
          ],
          followers: [
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.random.image(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
            {
              followerId: faker.datatype.uuid(),
              img: faker.image.people(),
              name: faker.name.findName(),
              image: faker.image.people(),
              email: faker.internet.email(),
              address: faker.address.city(),
              username: faker.internet.userName(),

              designation: faker.random.arrayElement([
                "Student",
                "Professor",
                "Alumini",
              ]),
            },
          ],
        });
      });
    },
  });
}

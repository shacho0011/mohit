# practice-app
## how to use this application

git clone https://github.com/shacho0011/mohit.git
cd mohit/client
npm install
cd ..
yarn install

## Database

#### database username: postgres
#### database password: 123456
[change database username, and password accordingly]

#### database name: practice

### Run the following command
npx knex migrate:latest
npx knex seed:run
if you use npm@5.2.0 or above then add npx before the cmd line. if lower version then ignore it.


#Run the app
npm run dev
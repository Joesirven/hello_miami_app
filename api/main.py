from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
import os
import uvicorn

from routers import (
    users
)

app = FastAPI()


app.add_middleware(
     CORSMiddleware,
     allow_origins=[
         os.environ.get("CORS_HOST", "http://localhost:3000"),
     ],
     allow_credentials=True,
     allow_methods=["*"],
     allow_headers=["*"],
 )


app.include_router(users.router)

app.include_router(users.router)
# app.include_router(plans.router)
# app.include_router(savings.router)
# app.include_router(transactions.router)
# app.include_router(journals.router)
# app.include_router(expenses.router)
# app.include_router(expenses_type_vo.router)



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

from fastapi import FastAPI
# from authenticator import authenticator
# from fastapi.middleware.cors import CORSMiddleware
# import os
import uvicorn

# from routers import (
#     # all the domains
# )

app = FastAPI()


@app.get("/")
async def index() -> dict:
    return {"message": "Hello Miami"}


@app.get("/upload_videos")
async def upload_videos() -> dict:
    return {"message": "Video Uploaded"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)


# app.include_router(authenticator.router)

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[
#         os.environ.get("CORS_HOST", "http://localhost:3000"),
#     ],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# app.include_router(users.router)

# app.include_router(users.router)
# app.include_router(plans.router)
# app.include_router(savings.router)
# app.include_router(transactions.router)
# app.include_router(journals.router)
# app.include_router(expenses.router)
# app.include_router(expenses_type_vo.router)

package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type User struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
	Role  string `json:"role"`
}

type Ticket struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Status      string `json:"status"`
	AssignedTo  int    `json:"assigned_to"`
	TimeCreated string `json:"time_created"`
	TimeUpdated string `json:"time_updated"`
	TimeClosed  string `json:"time_closed"`
}

type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

var users = []User{
	{ID: 1, Name: "Admin", Email: "admin@example.com", Role: "admin"},
}
var tickets = []Ticket{}

func main() {
	r := gin.Default()
	r.Use(cors.Default())

	r.GET("/users", func(c *gin.Context) {
		c.JSON(http.StatusOK, users)
	})

	r.GET("/tickets", func(c *gin.Context) {
		c.JSON(http.StatusOK, tickets)
	})

	r.POST("/tickets", func(c *gin.Context) {
		var t Ticket
		if err := c.ShouldBindJSON(&t); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		t.ID = len(tickets) + 1
		tickets = append(tickets, t)
		c.JSON(http.StatusOK, t)
	})

	r.POST("/login", func(c *gin.Context) {
		var req LoginRequest
		if err := c.ShouldBindJSON(&req); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		if req.Email == "admin@example.com" && req.Password == "password" {
			c.JSON(http.StatusOK, users[0])
		} else {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
		}
	})

	r.Run(":8080")
}

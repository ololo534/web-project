package io.pivotal.sporing.todos.acceptance;

import io.pivotal.spring.todos.todolist.TodoItemRequest;
import io.restassured.RestAssured;
import io.restassured.authentication.FormAuthConfig;
import io.restassured.http.ContentType;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;

import static io.restassured.RestAssured.given;
import static org.hamcrest.core.IsEqual.equalTo;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class OutOfProcessControllerTest {

	@LocalServerPort
	private int serverPort;

	@Before
	public void setUp() {
		RestAssured.baseURI = "http://localhost";
		RestAssured.port = serverPort;
	}

	@Test
	public void shouldCreateListItem() {
		TodoItemRequest request = new TodoItemRequest("write a component test");

		given()
				.auth().form("joeuser@example.com", "password",
				new FormAuthConfig("/login", "username", "password"))
				.body(request)
				.accept(ContentType.JSON)
				.contentType(ContentType.JSON)
				.post("/lists/1/items")
				.then()
				.statusCode(201)
				.body("id", equalTo("7"))
				.body("name", equalTo("write a component test"));
	}
}

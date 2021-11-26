package com.git.wiki;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.git.wiki.TextProcesser;

@RestController
public class WikiController {

	private WikiRepository repo;

	// Autowired ������̼��� �Ű������� �ʵ� Ÿ�Կ� �´� ��ü��
	// Spring���� �����Ͽ� �����Ͽ���(������ ����, ������ü����, DI, Dependency Injection)
	// Repository �������̽� ������ �´� ��ü�� Spring�� �����Ͽ� �־���
	@Autowired
	public WikiController(WikiRepository repo) {
		this.repo = repo;
	}

	@GetMapping(value = "/wiki")
	public List<Wiki> getWikis() throws InterruptedException {
		// repository.findAll();
		// SELECT * FROM photo;
		// �⺻������ PK ������(asc, ascending)�ǰ� �ִ� ��Ȳ
		// 1 2 3 .....
//		return repo.findAll();

		// id�÷� ������(clusted index)
		// Sort.by("�����÷�").desceding() ������
		// Sort.by("�����÷�").ascending() ������
		return repo.findAll(Sort.by("id").descending());
	}

	// ��) �������� 2��, 1��° ������
	// ��) GET /photos/paging?page=0&size=2
	@GetMapping("/wiki/paging")
	public Page<Wiki> getWikisPaging(@RequestParam int page, @RequestParam int size) {
		// findAll(Pageable page)
		// findAll(PageRequest.of(page, size, Sort sort));
		return repo.findAll(PageRequest.of(page, size, Sort.by("id").descending()));
	}

	@PostMapping(value = "/wiki")
	public Wiki addWiki(@RequestBody Wiki wiki, HttpServletResponse res) throws InterruptedException {
		// Ÿ��Ʋ�� ��
		if (TextProcesser.isEmpyText(wiki.getTitle())) {
			res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return null;
		}

		// ��ü ����
		Wiki wikiItem = Wiki.builder().title(wiki.getTitle())
				.description(TextProcesser.getPlainText(wiki.getDescription())).createdTime(new Date().getTime()).build();

		// repository.save(entity)
		// insert into photo(...) values(...)
		Wiki wikiSaved = repo.save(wikiItem);

		// ���ҽ� ������k
		res.setStatus(HttpServletResponse.SC_CREATED);

		// �߰��� ��ü�� ��ȯ
		return wikiSaved;
	}

	@DeleteMapping(value = "/wiki/{id}")
	public boolean removeWiki(@PathVariable long id, HttpServletResponse res) throws InterruptedException {
//		Thread.sleep(5000);

		// id�� �ش��ϴ� ��ü�� ������
		// Optional null-safe, �ڹ� 1.8 ���� ���
		// repository.findBy(id)
		// select * from photo where id = ?;
		Optional<Wiki> wiki = repo.findById(id);
		if (wiki.isEmpty()) {
			res.setStatus(HttpServletResponse.SC_NOT_FOUND);
			return false;
		}

		// ���� ����
		// repository.deletebyId(id)
		// delete from photo where id = ?
		repo.deleteById(id);

		return true;
	}

	@PutMapping(value = "/wiki/{id}")
	public Wiki modifyWiki(@PathVariable long id, @RequestBody Wiki wiki, HttpServletResponse res)
			throws InterruptedException {

		// id�� �ش��ϴ� ��ü�� ������
		Optional<Wiki> wikiItem = repo.findById(id);
		if (wikiItem.isEmpty()) {
			res.setStatus(HttpServletResponse.SC_NOT_FOUND);
			return null;
		}

		// Ÿ��Ʋ�� ��
		if (TextProcesser.isEmpyText(wiki.getTitle())) {
			res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return null;
		}


		Wiki wikiToSave = wikiItem.get();

		wikiToSave.setTitle(wiki.getTitle());
		wikiToSave.setDescription(TextProcesser.getPlainText(wiki.getDescription()));

		// repository.save(entity)
		// id�� ������ UPDATE, ������ INSERT
		// UPDATE
		// SET title=?, descript=?,......
		// WHERE id = ?
		Wiki wikiSaved = repo.save(wikiToSave);

		return wikiSaved;
	}
}

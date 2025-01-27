package createpdf.createController;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import createpdf.createService.PdfService;


@RestController
@RequestMapping("/pdf")
public class PdfController {

	@Autowired
	private PdfService service;
	
	
	@PostMapping("/create")
	public ResponseEntity<?> getPdfJasper() throws IOException{
		byte[] response = service.getPdf();
		
		 MediaType mediaType = MediaType.APPLICATION_PDF;
		    String attachment = "attachment; filename=\"cartaDeCorrecao.pdf\"";
		    return ResponseEntity.ok()
		            .header(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, "Content-Disposition")
		            .header(HttpHeaders.CONTENT_DISPOSITION, attachment)
		            .contentType(mediaType)
		            .body(response);
		
	}
}

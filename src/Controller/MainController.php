<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MainController extends AbstractController
{
    #[Route('/index', name: 'index')]
    public function index1(): Response
    {
        return $this->render('main/index.html.twig');
    }

    #[Route('/index3', name: 'index3')]
    public function index3(): Response
    {
        return $this->render('base3.html.twig');
    }
}